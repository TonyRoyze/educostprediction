
import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate inputs
    // The model expects: Country, Level, Program, Living_Cost_Index
    if (!body.Country || !body.Level || !body.Program || body.Living_Cost_Index === undefined || body.Duration_Years === undefined || body.Exchange_Rate === undefined) {
      return NextResponse.json({ error: 'Missing required fields: Country, Level, Program, Living_Cost_Index, Duration_Years, Exchange_Rate' }, { status: 400 });
    }

    // Path to the python executable in the local .model_env
    const pythonPath = path.join(process.cwd(), '.model_env/bin/python');
    const scriptPath = path.join(process.cwd(), 'scripts/predict_cost.py');

    return new Promise((resolve) => {
      const pythonProcess = spawn(pythonPath, [scriptPath]);

      let dataString = '';
      let errorString = '';

      // Send input data to script via stdin
      pythonProcess.stdin.write(JSON.stringify(body));
      pythonProcess.stdin.end();

      pythonProcess.stdout.on('data', (data) => {
        dataString += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        errorString += data.toString();
      });

      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          console.error('Python script error:', errorString);
          resolve(NextResponse.json({ error: 'Prediction script failed', details: errorString }, { status: 500 }));
          return;
        }

        try {
          // The output might contain newlines, parse the last valid JSON line or the whole thing
          const result = JSON.parse(dataString.trim());
          if (result.error) {
            resolve(NextResponse.json({ error: result.error }, { status: 400 }));
          } else {
            resolve(NextResponse.json(result));
          }
        } catch (e) {
          console.error("Parse error:", e, "Data:", dataString);
          resolve(NextResponse.json({ error: 'Failed to parse prediction result' }, { status: 500 }));
        }
      });
    });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
