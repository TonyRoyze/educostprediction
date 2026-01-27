"use client"

import * as React from "react"
import {
  GraduationCap,
  MapPin,
  Building2,
  BookOpen,
  Clock,
  DollarSign,
  TrendingUp,
  Home,
  Plane,
  Shield,
  ArrowRightLeft,
  Copy,
  Check,
  Settings2,
  Code2,
  LayoutGrid,
  User,
  Mail,
  Calculator,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldContent
} from "@/components/ui/field"
import { cn } from "@/lib/utils"
import { CountryCombobox, CityCombobox, SearchableCombobox, ProgramCombobox, cities } from "@/components/searchable-combobox"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Upload, Settings, FileSpreadsheet, Eye, EyeOff, Plus, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Types for the education cost data
interface EducationCostData {
  country: string
  city: string
  university: string
  program: string
  level: string
  durationYears: number
  tuitionUSD: number
  livingCostIndex: number
  rentUSD: number
  visaFeeUSD: number
  insuranceUSD: number
  exchangeRate: number
}

// Field configuration
interface FieldConfig {
  key: keyof EducationCostData
  label: string
  icon: React.ReactNode
  type: "string" | "number" | "currency" | "index"
  category: "location" | "program" | "cost"
  visible: boolean
  description: string
  inputType: "text" | "number" | "select" | "country-combobox" | "city-combobox" | "searchable-select"
  selectOptions?: string[]
}

// Default sample data
const defaultData: EducationCostData = {
  country: "Germany",
  city: "Munich",
  university: "Technical University of Munich",
  program: "Computer Science",
  level: "Master's",
  durationYears: 2,
  tuitionUSD: 3000,
  livingCostIndex: 82.5,
  rentUSD: 850,
  visaFeeUSD: 75,
  insuranceUSD: 1200,
  exchangeRate: 0.92
}

// Sample data for dropdowns
const countryOptions = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Japan',
  'Netherlands', 'Singapore', 'France', 'Switzerland', 'Sweden',
  'Denmark', 'China', 'South Korea', 'Ireland', 'New Zealand',
  'Austria', 'Belgium', 'Hong Kong', 'Portugal', 'Israel', 'Taiwan',
  'Czech Republic', 'India', 'Poland', 'Malaysia', 'Spain', 'Italy',
  'Finland', 'Norway', 'Brazil', 'Turkey', 'Russia', 'Mexico',
  'Greece', 'Thailand', 'UAE', 'South Africa', 'Egypt', 'Argentina',
  'Indonesia', 'Saudi Arabia', 'Nigeria', 'Vietnam', 'Hungary',
  'Iceland', 'Colombia', 'Romania', 'Luxembourg', 'Tunisia',
  'Cyprus', 'Croatia', 'Dominican Republic', 'Morocco', 'Peru',
  'Ecuador', 'Lebanon', 'Bahrain', 'Uruguay', 'Bulgaria', 'Ghana',
  'Algeria', 'Panama', 'Bangladesh', 'Kuwait', 'Ukraine', 'Slovenia',
  'Serbia', 'Iran', 'Uzbekistan', 'El Salvador']
const cityOptions = ['Cambridge', 'London', 'Toronto', 'Melbourne', 'Munich', 'Tokyo',
  'Amsterdam', 'Singapore', 'Paris', 'Zurich', 'Stockholm',
  'Copenhagen', 'Beijing', 'Seoul', 'Dublin', 'Busan', 'Auckland',
  'Vienna', 'Brussels', 'Ann Arbor', 'Atlanta', 'Austin', 'Bristol',
  'Ottawa', 'Hong Kong', 'Lisbon', 'Tel Aviv', 'Taipei', 'Prague',
  'Stanford', 'Boston', 'Oxford', 'Heidelberg', 'Basel', 'Delft',
  'Waterloo', 'Canberra', 'Lund', 'San Diego', 'Seattle', 'Edmonton',
  'Glasgow', 'Bangalore', 'Aalborg', 'Warsaw', 'Galway', 'Daejeon',
  'Kuala Lumpur', 'Berkeley', 'Manchester', 'Vancouver', 'Sydney',
  'Berlin', 'Barcelona', 'Milan', 'Rotterdam', 'Helsinki', 'Oslo',
  'Osaka', 'Kyoto', 'Nagoya', 'Sendai', 'Fukuoka', 'Sapporo',
  'Tsukuba', 'Kobe', 'Kanazawa', 'Hiroshima', 'Adelaide', 'Perth',
  'Gold Coast', 'Hobart', 'Newcastle', 'Wollongong', 'Darwin',
  'Townsville', 'Sunshine Coast', 'Armidale', 'Dresden', 'Stuttgart',
  'Hamburg', 'Aachen', 'Karlsruhe', 'Darmstadt', 'Braunschweig',
  'Jena', 'Hannover', 'Freiburg', 'Philadelphia', 'Chicago',
  'Baltimore', 'Nashville', 'Durham', 'Madison', 'Tempe', 'Boulder',
  'Minneapolis', 'Davis', 'Leeds', 'Warwick', 'Sheffield',
  'Birmingham', 'Southampton', 'Nottingham', 'Cardiff', 'Belfast',
  'Hamilton', 'London ON', 'Halifax', 'Victoria', 'Quebec City',
  'Winnipeg', 'Regina', "St. John's", 'Saskatoon', 'Sherbrooke',
  'Pittsburgh', 'Urbana-Champaign', 'Calgary', 'Sao Paulo',
  'Istanbul', 'Moscow', 'Mexico City', 'Athens', 'Bangkok', 'Dubai',
  'New York', 'Ithaca', 'Shenzhen', 'Cape Town', 'Cairo',
  'Buenos Aires', 'Jakarta', 'Riyadh', 'Lagos', 'Ho Chi Minh City',
  'Eindhoven', 'Enschede', 'Groningen', 'Maastricht', 'Nijmegen',
  'Tilburg', 'Utrecht', 'Leiden', 'Wageningen', 'Toulouse', 'Lyon',
  'Grenoble', 'Nice', 'Bordeaux', 'Lille', 'Rennes', 'Strasbourg',
  'Montpellier', 'Lausanne', 'Geneva', 'Bern', 'St. Gallen',
  'Lugano', 'Fribourg', 'Neuchatel', 'Lucerne', 'Winterthur',
  'Aarhus', 'Shanghai', 'Hangzhou', 'Nanjing', 'Guangzhou', 'Wuhan',
  "Xi'an", 'Chengdu', 'Daegu', 'Gwangju', 'Ulsan', 'Pohang',
  'Incheon', 'Suwon', 'Cheongju', 'New Haven', 'Princeton',
  'Los Angeles', 'Urbana', 'Columbus', 'West Lafayette',
  'Gainesville', 'Raleigh', 'College Station', 'Corvallis',
  'Edinburgh', 'Liverpool', 'Aberdeen', 'Leicester', 'Reading',
  'Sussex', 'Essex', 'Bath', 'Surrey', 'Exeter', 'Kent', 'Dundee',
  'Strathclyde', 'Heriot-Watt', 'Loughborough', 'Brunel',
  'Queen Mary', 'Royal Holloway', 'Lancaster', 'Swansea', 'Aston',
  'Hull', 'Keele', 'Plymouth', 'Portsmouth', 'Ulster', 'Northumbria',
  'Coventry', 'Oxford Brookes', 'De Montfort', 'Westminster',
  'Greenwich', 'Kingston', 'Montreal', 'Windsor', 'Moncton',
  'Trois-Rivieres', 'Thunder Bay', 'Sudbury', 'Prince George',
  'Brisbane', 'Toowoomba', 'Ballarat', 'Lismore', 'Frankfurt',
  'Cologne', 'Bonn', 'San Francisco', 'Cork', 'Limerick', 'Maynooth',
  'Denver', 'Waterford', 'Portland', 'Sligo', 'Athlone', 'Trondheim',
  'Espoo', 'Bergen', 'Tampere', 'Odense', 'Tromsø', 'Turku',
  'Stavanger', 'Oulu', 'Roskilde', 'Ås', 'Vaasa', 'Lyngby', 'Bodø',
  'Jyväskylä', 'Kolding', 'Gjøvik', 'Lappeenranta', 'Bremen',
  'Esbjerg', 'Kristiansand', 'Kuopio', 'Slagelse', 'Horten',
  'Joensuu', 'Herning', 'Wellington', 'Uppsala', 'Porto',
  'Christchurch', 'Gothenburg', 'Coimbra', 'Dunedin', 'Braga',
  'Linköping', 'Aveiro', 'Palmerston North', 'Umeå', 'Faro',
  'Karlstad', 'Vila Real', 'Växjö', 'Funchal', 'Madrid', 'Rome',
  'Thessaloniki', 'Graz', 'Monterrey', 'Valencia', 'Turin', 'Patras',
  'Linz', 'Guadalajara', 'Seville', 'Bologna', 'Heraklion',
  'Salzburg', 'Puebla', 'Bilbao', 'Florence', 'Volos', 'Innsbruck',
  'Queretaro', 'Granada', 'Naples', 'Ioannina', 'Klagenfurt',
  'Merida', 'Zaragoza', 'Pisa', 'Rhodes', 'Leoben', 'Tijuana',
  'Salamanca', 'Padua', 'Chania', 'Dornbirn', 'San Luis Potosi',
  'Leuven', 'Budapest', 'Ankara', 'Ghent', 'Debrecen',
  'Saint Petersburg', 'Izmir', 'Szeged', 'Novosibirsk', 'Eskisehir',
  'Antwerp', 'Pecs', 'Kazan', 'Bursa', 'Louvain', 'Gyor', 'Tomsk',
  'Antalya', 'Piraeus', 'Hasselt', 'Miskolc', 'Yekaterinburg',
  'Kayseri', 'Xanthi', 'Liege', 'Veszprem', 'Samara', 'Konya',
  'Chios', 'Mons', 'Kecskemet', 'Rostov-on-Don', 'Rio de Janeiro',
  'Mumbai', 'Chiang Mai', 'Abu Dhabi', 'Campinas', 'Delhi',
  'Khon Kaen', 'Alexandria', 'Sharjah', 'Porto Alegre', 'Chennai',
  'Phuket', 'Giza', 'Ajman', 'Recife', 'Hyderabad', 'Hat Yai',
  'Port Said', 'Al Ain', 'Florianopolis', 'Pune',
  'Nakhon Ratchasima', 'Mansoura', 'Ras Al Khaimah', 'Salvador',
  'Kanpur', 'Songkhla', 'Aswan', 'Fujairah', 'Reykjavik', 'Bogota',
  'Bucharest', 'Luxembourg City', 'Akureyri', 'Medellin', 'Krakow',
  'Cluj-Napoca', 'Esch-sur-Alzette', 'Bandung', 'Cali', 'Wroclaw',
  'Timisoara', 'Belval', 'Yogyakarta', 'Hafnarfjordur',
  'Barranquilla', 'Poznan', 'Iasi', 'Kirchberg', 'Surabaya',
  'Kopavogur', 'Bucaramanga', 'Gdansk', 'Brasov', 'Differdange',
  'Malang', 'Lodz', 'Constanta', 'Walferdange', 'Semarang',
  'Borgarnes', 'Cartagena', 'Katowice', 'Craiova', 'Bertrange',
  'Denpasar', 'Tunis', 'Nicosia', 'Zagreb', 'Santo Domingo', 'Rabat',
  'Lima', 'Sfax', 'Limassol', 'Split', 'Santiago', 'Casablanca',
  'Arequipa', 'Cordoba', 'Sousse', 'Larnaca', 'Rijeka', 'La Romana',
  'Fez', 'Trujillo', 'Rosario', 'Monastir', 'Famagusta', 'Osijek',
  'San Pedro', 'Marrakech', 'Cusco', 'La Plata', 'Gabes', 'Zadar',
  'Paphos', 'Puerto Plata', 'Tangier', 'Piura', 'Mendoza', 'Bizerte',
  'Girne', 'Dubrovnik', 'Oujda', 'Chiclayo', 'Quito', 'Beirut',
  'Manama', 'Montevideo', 'Sofia', 'Accra', 'Algiers', 'Panama City',
  'Guayaquil', 'Byblos', 'Riffa', 'Salto', 'Plovdiv', 'Kumasi',
  'Oran', 'David', 'Cuenca', 'Tripoli', 'Isa Town', 'Maldonado',
  'Varna', 'Cape Coast', 'Constantine', 'Loja', 'Jounieh', 'Sakhir',
  'Rivera', 'Burgas', 'Tamale', 'Annaba', 'Chitré', 'Ambato',
  'Sidon', 'Muharraq', 'Paysandu', 'Ruse', 'Ho', 'Tlemcen',
  'La Chorrera', 'Dhaka', 'Kuwait City', 'Kyiv', 'Ljubljana',
  'Belgrade', 'Tehran', 'Tashkent', 'San Salvador', 'Chittagong',
  'Hawalli', 'Lviv', 'Maribor', 'Novi Sad', 'Isfahan', 'Samarkand',
  'Santa Ana', 'Khulna', 'Al Jahra', 'Kharkiv', 'Koper', 'Nis',
  'Mashhad', 'Bukhara', 'San Miguel', 'Rajshahi', 'Salmiya', 'Odesa',
  'Nova Gorica', 'Kragujevac', 'Shiraz', 'Namangan', 'Sonsonate',
  'Sylhet', 'Al Ahmadi', 'Dnipro', 'Celje', 'Subotica', 'Tabriz',
  'Andijan', 'Santa Tecla', 'Penang', 'Jeddah', 'Johor Bahru',
  'Dhahran', 'Kuching', 'Medina', 'MIT', 'Marseille', 'Cyberjaya',
  'Dammam', 'Bangi', 'Taif', 'Melaka', 'Tabuk', 'Shah Alam',
  'Makkah', 'Nilai', 'Al-Ahsa']
const programOptions = ['Computer Science', 'Data Science', 'Business Analytics',
  'Engineering', 'Mechanical Engineering', 'Information Science',
  'Artificial Intelligence', 'Finance', 'International Relations',
  'Physics', 'Sustainable Technology', 'Bioinformatics',
  'Computer Engineering', 'Digital Media', 'Data Analytics',
  'Business', 'Marine Biology', 'Social Sciences',
  'Biomedical Sciences', 'Aerospace Engineering',
  'Industrial Engineering', 'Chemical Engineering', 'Mathematics',
  'Political Science', 'Architecture', 'Electronics Engineering',
  'Medicine', 'Electrical Engineering', 'Molecular Biology',
  'Pharmaceutical Sciences', 'Robotics', 'Quantum Computing',
  'Climate Science', 'Neuroscience', 'Economics', 'Psychology',
  'International Business', 'Design', 'Environmental Science',
  'Software Engineering', 'Information Systems',
  'Information Technology', 'Software Development',
  'Computing Science', 'Data Engineering', 'Software Systems',
  'Digital Engineering', 'Robotics & AI', 'Cybersecurity',
  'Computing Systems', 'Applied Mathematics', 'Software Science',
  'Game Technology', 'Computer Science & Design',
  'Data Science & AI', 'Technology & Innovation',
  'Computing & Innovation', 'Digital Systems & AI',
  'Digital Systems', 'Business Informatics', 'Computational Science',
  'Digital Innovation', 'Robotics Engineering', 'AI Engineering',
  'Computer Systems', 'Information Security', 'Computer Networks',
  'Chemistry', 'Biotechnology', 'Marine Technology',
  'Energy Engineering', 'Petroleum Engineering',
  'Industrial Management', 'Mechatronics', 'Quantum Engineering',
  'Environmental Engineering', 'Renewable Energy',
  'Materials Science', 'Systems Engineering', 'Forestry Sciences',
  'Photonics', 'Engineering Management', 'Engineering Physics',
  'Sustainable Energy', 'Machine Learning',
  'Environmental Computing', 'Computing', 'Electronics',
  'Electronic Engineering', 'Digital Design', 'Digital Business',
  'Data Systems']

const programComboboxItems = [
  { label: "Select program", value: "" },
  ...programOptions.map(p => ({ label: p, value: p }))
]

const levelOptions = ['Master', 'Bachelor', 'PhD']

export function EducationCardBuilder() {
  const [dataset, setDataset] = React.useState<EducationCostData[]>([defaultData])
  const [data, setData] = React.useState<EducationCostData>(defaultData)
  const [copied, setCopied] = React.useState(false)
  const [copiedCmd, setCopiedCmd] = React.useState<string | null>(null)
  const [packageManager, setPackageManager] = React.useState<"bun" | "npm" | "pnpm" | "yarn">("npm")
  const [predictions, setPredictions] = React.useState<Record<string, number | null>>({
    predicted_cost: null,
    tuitionUSD: null,
    rentUSD: null,
    insuranceUSD: null,
    visaFeeUSD: null
  })
  const [isPredicting, setIsPredicting] = React.useState(false)

  // Reset prediction when data changes
  // Auto-predict when relevant data changes
  React.useEffect(() => {
    if (!data.country || !data.level || !data.program || data.livingCostIndex === undefined) {
      setPredictions({ predicted_cost: null, tuitionUSD: null, rentUSD: null, insuranceUSD: null, visaFeeUSD: null })
      return
    }

    const timer = setTimeout(async () => {
      setIsPredicting(true)
      try {
        const res = await fetch('/api/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Country: data.country,
            Level: data.level,
            Program: data.program,
            Duration_Years: data.durationYears,
            Living_Cost_Index: data.livingCostIndex,
            Exchange_Rate: data.exchangeRate
          })
        })
        const json = await res.json()
        if (json.predicted_cost || json.tuitionUSD) {
          setPredictions(json)
        } else {
          console.error("Prediction error:", json.error)
          setPredictions({ predicted_cost: null, tuitionUSD: null, rentUSD: null, insuranceUSD: null, visaFeeUSD: null })
        }
      } catch (e) {
        console.error("Prediction request failed:", e)
        setPredictions({ predicted_cost: null, tuitionUSD: null, rentUSD: null, insuranceUSD: null, visaFeeUSD: null })
      } finally {
        setIsPredicting(false)
      }
    }, 600) // Debounce prediction

    return () => clearTimeout(timer)
  }, [data.country, data.level, data.program, data.livingCostIndex, data.durationYears, data.exchangeRate])


  // Student input form data (for the preview card)
  const [studentName, setStudentName] = React.useState("")
  const [studentEmail, setStudentEmail] = React.useState("")

  const [fields, setFields] = React.useState<FieldConfig[]>([
    { key: "country", label: "Country", icon: <MapPin className="w-4 h-4" />, type: "string", category: "location", visible: true, description: "ISO country name", inputType: "country-combobox" },
    { key: "city", label: "City", icon: <Building2 className="w-4 h-4" />, type: "string", category: "location", visible: true, description: "City location", inputType: "city-combobox" },
    { key: "university", label: "University", icon: <GraduationCap className="w-4 h-4" />, type: "string", category: "location", visible: true, description: "Institution name", inputType: "text" },
    { key: "program", label: "Program", icon: <BookOpen className="w-4 h-4" />, type: "string", category: "program", visible: true, description: "Course/major name", inputType: "searchable-select" },
    { key: "level", label: "Level", icon: <Sparkles className="w-4 h-4" />, type: "string", category: "program", visible: true, description: "Degree level", inputType: "select", selectOptions: levelOptions },
    { key: "durationYears", label: "Duration", icon: <Clock className="w-4 h-4" />, type: "number", category: "program", visible: true, description: "Program length in years", inputType: "number" },
    { key: "tuitionUSD", label: "Tuition", icon: <DollarSign className="w-4 h-4" />, type: "currency", category: "cost", visible: false, description: "Total tuition in USD", inputType: "number" },
    { key: "livingCostIndex", label: "Living Cost Index", icon: <TrendingUp className="w-4 h-4" />, type: "index", category: "cost", visible: false, description: "Normalized expense index", inputType: "number" },
    { key: "rentUSD", label: "Monthly Rent", icon: <Home className="w-4 h-4" />, type: "currency", category: "cost", visible: true, description: "Average rent in USD", inputType: "number" },
    { key: "visaFeeUSD", label: "Visa Fee", icon: <Plane className="w-4 h-4" />, type: "currency", category: "cost", visible: true, description: "One-time visa fee", inputType: "number" },
    { key: "insuranceUSD", label: "Insurance", icon: <Shield className="w-4 h-4" />, type: "currency", category: "cost", visible: true, description: "Annual insurance cost", inputType: "number" },
    { key: "exchangeRate", label: "Exchange Rate", icon: <ArrowRightLeft className="w-4 h-4" />, type: "index", category: "cost", visible: false, description: "Local currency per USD", inputType: "number" }
  ])

  const visibleFields = fields.filter(f => f.visible)

  const toggleField = (key: keyof EducationCostData) => {
    setFields(prev => prev.map(f =>
      f.key === key ? { ...f, visible: !f.visible } : f
    ))
  }

  // CSV Import handler
  const handleCsvImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      const lines = text.split('\n')
      if (lines.length < 2) return

      const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
      const values = lines[1].split(',').map(v => v.trim())

      const newDataset: EducationCostData[] = []

      // Map CSV columns to data fields
      const fieldMappings: Record<string, keyof EducationCostData> = {
        'country': 'country',
        'city': 'city',
        'university': 'university',
        'program': 'program',
        'level': 'level',
        'duration': 'durationYears',
        'duration_years': 'durationYears',
        'durationyears': 'durationYears',
        'tuition': 'tuitionUSD',
        'tuition_usd': 'tuitionUSD',
        'tuitionusd': 'tuitionUSD',
        'living_cost_index': 'livingCostIndex',
        'livingcostindex': 'livingCostIndex',
        'rent': 'rentUSD',
        'rent_usd': 'rentUSD',
        'rentusd': 'rentUSD',
        'visa': 'visaFeeUSD',
        'visa_fee': 'visaFeeUSD',
        'visa_fee_usd': 'visaFeeUSD',
        'visafeeusd': 'visaFeeUSD',
        'insurance': 'insuranceUSD',
        'insurance_usd': 'insuranceUSD',
        'insuranceusd': 'insuranceUSD',
        'exchange_rate': 'exchangeRate',
        'exchangerate': 'exchangeRate',
      }

      // Parse each line as a new record
      for (let i = 0; i < lines.length; i++) {
        const rowValues = lines[i].split(',').map(v => v.trim())
        if (rowValues.length < headers.length) continue

        const record: any = { ...defaultData } // Start with defaults

        headers.forEach((header, index) => {
          const fieldKey = fieldMappings[header]
          if (fieldKey && rowValues[index]) {
            const field = fields.find(f => f.key === fieldKey)
            if (field) {
              if (field.type === 'string') {
                record[fieldKey] = rowValues[index]
              } else {
                const numValue = parseFloat(rowValues[index])
                if (!isNaN(numValue)) {
                  record[fieldKey] = numValue
                }
              }
            }
          }
        })
        newDataset.push(record as EducationCostData)
      }

      if (newDataset.length > 0) {
        setDataset(newDataset)
        setData(newDataset[0])
      }
    }
    reader.readAsText(file)
    // Reset input
    event.target.value = ''
  }

  const updateData = (key: keyof EducationCostData, value: string | number) => {
    // Update the currently displayed data
    const newData = { ...data, [key]: value }
    setData(newData)

    // Also update the record in the dataset if it exists
    // We match by a unique combination or just reference. 
    // Ideally we should track index, but for now we'll update the matching record in dataset
    setDataset(prev => prev.map(d =>
      (d.university === data.university && d.program === data.program && d.level === data.level)
        ? newData
        : d
    ))
  }

  const updateDatasetRow = (index: number, key: keyof EducationCostData, value: string | number) => {
    const newDataset = [...dataset]
    newDataset[index] = { ...newDataset[index], [key]: value }
    setDataset(newDataset)
    // If this row is currently displayed, update data too
    if (JSON.stringify(dataset[index]) === JSON.stringify(data)) {
      setData(newDataset[index])
    }
  }

  const addRow = () => {
    setDataset(prev => [...prev, { ...defaultData, university: "New University" }])
  }

  const removeRow = (index: number) => {
    if (dataset.length <= 1) return
    const newDataset = dataset.filter((_, i) => i !== index)
    setDataset(newDataset)
    if (index === 0) setData(newDataset[0])
  }

  const formatValue = (field: FieldConfig, value: string | number) => {
    if (field.type === "currency") {
      return `$${Number(value).toLocaleString()}`
    }
    if (field.type === "number" && field.key === "durationYears") {
      return `${value} ${Number(value) === 1 ? 'year' : 'years'}`
    }
    if (field.type === "index") {
      return Number(value).toFixed(2)
    }
    return String(value)
  }

  const calculateTotalCost = () => {
    // Living Cost = (Living Cost Index / 100) * 12000 * Duration
    const totalLivingCost = (data.livingCostIndex / 100) * 12000 * data.durationYears
    const totalCost = totalLivingCost + data.visaFeeUSD + (data.insuranceUSD * data.durationYears)
    return totalCost
  }



  const getIconName = (key: keyof EducationCostData): string => {
    const iconMap: Record<keyof EducationCostData, string> = {
      country: "MapPin",
      city: "Building2",
      university: "GraduationCap",
      program: "BookOpen",
      level: "Sparkles",
      durationYears: "Clock",
      tuitionUSD: "DollarSign",
      livingCostIndex: "TrendingUp",
      rentUSD: "Home",
      visaFeeUSD: "Plane",
      insuranceUSD: "Shield",
      exchangeRate: "ArrowRightLeft"
    }
    return iconMap[key]
  }

  const getUniqueIcons = () => {
    const icons = visibleFields.map(f => getIconName(f.key))
    return [...new Set([...icons, "User", "Mail", "Calculator"])].join(", ")
  }

  const generateCode = () => {
    const locationFields = visibleFields.filter(f => f.category === "location")
    const programFields = visibleFields.filter(f => f.category === "program")
    const costFields = visibleFields.filter(f => f.category === "cost")

    return `
"use client"

import * as React from "react"
import { ${getUniqueIcons()} } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EducationCostData {
${visibleFields.map(f => `  ${f.key}: ${f.type === 'string' ? 'string' : 'number'}`).join('\n')}
}

interface EducationCostCardProps {
  data: EducationCostData
  onSubmit?: (studentInfo: { name: string; email: string }) => void
}

export function EducationCostCard({ data, onSubmit }: EducationCostCardProps) {
  const [studentName, setStudentName] = React.useState("")
  const [studentEmail, setStudentEmail] = React.useState("")

  const formatValue = (type: string, value: string | number, key: string) => {
    if (type === "currency") return \`$\${Number(value).toLocaleString()}\`
    if (type === "number" && key === "durationYears") return \`\${value} \${Number(value) === 1 ? 'year' : 'years'}\`
    if (type === "index") return Number(value).toFixed(2)
    return String(value)
  }

  const calculateTotalCost = () => {
    // Living Cost = (Living Cost Index / 100) * 12000 * Duration
    const totalLivingCost = (data.livingCostIndex / 100) * 12000 * data.durationYears
    return totalLivingCost + data.visaFeeUSD + (data.insuranceUSD * data.durationYears)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ name: studentName, email: studentEmail })
  }

  return (
    <Card className="w-full max-w-md overflow-hidden">
      {/* Part 1: Program Information */}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight">
              {data.university}
            </CardTitle>
            <CardDescription className="mt-1">
              {data.program}
            </CardDescription>
          </div>
          ${visibleFields.some(f => f.key === 'level') ? `<Badge variant="secondary">{data.level}</Badge>` : ''}
        </div>
        ${locationFields.length > 0 ? `
        <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{data.city}, {data.country}</span>
        </div>` : ''}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Cost Breakdown */}
        <div className="grid grid-cols-2 gap-3">
${costFields.map(f => `          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <${getIconName(f.key)} className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">${f.label}</span>
            </div>
            <p className="font-semibold">{formatValue("${f.type}", data.${f.key}, "${f.key}")}</p>
          </div>`).join('\n')}
        </div>

        {/* Total Cost */}
        <div className="bg-primary/5 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              <span className="font-medium">Estimated Total Cost</span>
            </div>
            <span className="text-2xl font-bold text-primary">
              \${calculateTotalCost().toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Including tuition, rent, visa & insurance for {data.durationYears} {data.durationYears === 1 ? 'year' : 'years'}
          </p>
        </div>

        <Separator />

        {/* Part 2: Student Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <User className="w-4 h-4" />
              Get Personalized Quote
            </h4>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Get Free Consultation
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Usage Example:
// <EducationCostCard 
//   data={{
${visibleFields.map(f => `//     ${f.key}: ${typeof data[f.key] === 'string' ? `"${data[f.key]}"` : data[f.key]}`).join(',\n')}
//   }}
//   onSubmit={(info) => console.log("Student info:", info)}
// />`
  }

  const copyCode = async () => {
    await navigator.clipboard.writeText(generateCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderFieldInput = (field: FieldConfig) => {
    if (field.inputType === "country-combobox") {
      return (
        <CountryCombobox
          value={String(data[field.key])}
          onValueChange={(value) => updateData(field.key, value)}
          size="sm"
        />
      )
    }

    if (field.inputType === "city-combobox") {
      return (
        <CityCombobox
          value={String(data[field.key])}
          onValueChange={(value) => {
            updateData(field.key, value)
            // Auto update country if found
            const cityData = cities.find(c => c.value === value)
            if (cityData?.country) {
              updateData("country", cityData.country)
            }
          }}
          countryFilter={data.country}
          size="sm"
        />
      )
    }

    if (field.key === "program" || field.inputType === "searchable-select") {
      return (
        <ProgramCombobox
          items={programComboboxItems}
          value={String(data[field.key])}
          onValueChange={(value: string) => updateData(field.key, value)}
          size="sm"
        />
      )
    }

    if (field.inputType === "select" && field.selectOptions) {
      const currentValue = String(data[field.key])
      return (
        <Select
          defaultValue={currentValue}
          onValueChange={(value) => {
            if (value) updateData(field.key, value)
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue>{currentValue || `Select ${field.label.toLowerCase()}`}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {field.selectOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    }

    return (
      <Input
        type="text"
        value={data[field.key]}
        onChange={(e) => updateData(field.key, e.target.value)}
        placeholder={field.description}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">EduCost Card Builder</h1>
              <p className="text-xs text-muted-foreground">Build education cost cards for your website</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Left Panel - Card Preview */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Live Preview</h2>
                <p className="text-sm text-muted-foreground">This is how the card will appear on your website</p>
              </div>
            </div>

            {/* Card Preview Container */}
            <div className="flex justify-center p-8 bg-muted/30 rounded-xl border-2 border-dashed">
              <Card className="w-full max-w-md overflow-hidden shadow-lg">

                {/* Part 1: Program Information */}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      {/* University Selection */}
                      <div>
                        {/* <Label className="text-xs text-muted-foreground">University</Label> */}
                        <Select
                          value={data.university}
                          onValueChange={(val) => {
                            // When uni changes, pick the first valid record for this uni
                            const record = dataset.find(d => d.university === val)
                            if (record) setData(record)
                          }}
                        >
                          <SelectTrigger className="w-full border-none shadow-none text-lg font-bold p-0 h-auto focus:ring-0">
                            <SelectValue>{data.university}</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {[...new Set(dataset.map(d => d.university))].map(uni => (
                              <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="mt-1">
                        <ProgramCombobox
                          items={dataset
                            .filter(d => d.university === data.university)
                            .map(d => ({ label: d.program, value: d.program }))
                            .filter((v, i, a) => a.findIndex(t => t.value === v.value) === i)
                          }
                          value={data.program}
                          onValueChange={(val) => {
                            const record = dataset.find(d => d.university === data.university && d.program === val)
                            if (record) setData(record)
                          }}
                          className="border-none shadow-none p-0 h-auto bg-transparent hover:bg-transparent"
                          size="sm"
                        />
                      </div>
                    </div>

                    {/* Level Selection (Filtering based on Uni) */}
                    {visibleFields.some(f => f.key === 'level') && (
                      <Select
                        value={data.level}
                        onValueChange={(val) => {
                          const record = dataset.find(d => d.university === data.university && d.level === val)
                          if (record) setData(record)
                        }}
                      >
                        <SelectTrigger className="w-[100px] h-7 text-xs bg-secondary border-none">
                          <SelectValue>{data.level}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {dataset
                            .filter(d => d.university === data.university)
                            .map(d => d.level)
                            .filter((v, i, a) => a.indexOf(v) === i) // Unique
                            .map(lvl => (
                              <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>

                  {/* Location Info (Read Only or Derived) */}
                  {(visibleFields.some(f => f.key === 'city') || visibleFields.some(f => f.key === 'country')) && (
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{data.city}, {data.country}</span>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Cost Breakdown */}
                  <div className="grid grid-cols-2 gap-3">
                    {visibleFields
                      .filter(f => ['durationYears', 'tuitionUSD', 'rentUSD', 'livingCostIndex', 'visaFeeUSD', 'insuranceUSD', 'exchangeRate'].includes(f.key))
                      .map((field) => (
                        <div key={field.key} className="bg-muted/50 rounded-lg p-3 relative group">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-muted-foreground">{field.icon}</span>
                            <span className="text-xs text-muted-foreground">{field.label}</span>
                            {predictions[field.key] != null && (
                              <Sparkles className="w-3 h-3 text-green-500 animate-pulse ml-auto" />
                            )}
                          </div>
                          <p className="font-semibold flex items-center gap-1">
                            {formatValue(field, predictions[field.key] != null ? predictions[field.key]! : data[field.key])}
                          </p>
                        </div>
                      ))}
                  </div>
                  {/* Total Cost */}
                  <Separator />
                  <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-primary" />
                        <span className="font-medium">Estimated Total Cost</span>
                      </div>
                      <div className="text-right">
                        {isPredicting ? (
                          <span className="text-sm text-muted-foreground animate-pulse">Calculating...</span>
                        ) : (
                          <span className="text-2xl font-bold text-primary">
                            ${(predictions.predicted_cost !== null ? predictions.predicted_cost : calculateTotalCost()).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {predictions.predicted_cost !== null && (
                      <div className="flex items-center justify-end gap-1 text-[10px] text-green-600 font-medium pt-1 border-t border-primary/10 tracking-tight uppercase">
                        <Sparkles className="w-3 h-3" />
                        <span>AI Total (Univariate)</span>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-2 text-right">
                      Including tuition, rent, visa & insurance for {data.durationYears} {data.durationYears === 1 ? 'year' : 'years'}
                    </p>
                  </div>

                  <p className="text-xs text-destructive mt-4 italic">
                    * The total cost is an estimated value based on AI models and regional averages.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Data Management Section */}
            <Card className="w-full shadow-sm">
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                  Edit your dataset and card configuration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="data" className="w-full">
                  <TabsList>
                    <TabsTrigger value="data">Data Spreadsheet</TabsTrigger>
                    <TabsTrigger value="design">Card Design</TabsTrigger>
                  </TabsList>

                  {/* Tab 1: DATA */}
                  <TabsContent value="data" className="space-y-4">
                    <div className="flex items-center justify-between mt-4">
                      <h3 className="text-lg font-medium">Dataset ({dataset.length} records)</h3>
                      <div className="flex gap-2">
                        <div className="relative">
                          <Input
                            type="file"
                            accept=".csv"
                            onChange={handleCsvImport}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <Button variant="outline" size="sm">
                            <Upload className="w-4 h-4 mr-2" />
                            Import CSV
                          </Button>
                        </div>
                        <Button onClick={addRow} size="sm">
                          <Plus className="w-4 h-4 mr-2" /> Add Row
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-md overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead className="min-w-[200px]">University</TableHead>
                            <TableHead className="min-w-[120px]">Country</TableHead>
                            <TableHead className="min-w-[120px]">City</TableHead>
                            <TableHead className="min-w-[100px]">Level</TableHead>
                            <TableHead className="min-w-[180px]">Program</TableHead>
                            <TableHead className="min-w-[80px]">Dur.(Y)</TableHead>
                            <TableHead className="min-w-[80px]">Liv.Idx</TableHead>
                            <TableHead className="min-w-[80px]">Ex.Rate</TableHead>

                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {dataset.map((row, idx) => (
                            <TableRow key={idx}>
                              <TableCell>
                                <Button variant="ghost" size="icon-xs" onClick={() => removeRow(idx)} disabled={dataset.length <= 1}>
                                  <Trash2 className="w-3.5 h-3.5 text-destructive" />
                                </Button>
                              </TableCell>
                              <TableCell className="p-1">
                                <Input
                                  className="h-8 border-transparent hover:border-input focus:border-input min-w-[180px]"
                                  value={row.university}
                                  onChange={e => updateDatasetRow(idx, 'university', e.target.value)}
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <CountryCombobox
                                  value={row.country}
                                  onValueChange={(val) => updateDatasetRow(idx, 'country', val)}
                                  size="sm"
                                  className="w-full border-transparent hover:border-input min-w-[100px]"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <CityCombobox
                                  value={row.city}
                                  onValueChange={(val) => updateDatasetRow(idx, 'city', val)}
                                  countryFilter={row.country}
                                  size="sm"
                                  className="w-full border-transparent hover:border-input min-w-[100px]"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Select value={row.level} onValueChange={val => updateDatasetRow(idx, 'level', val || "Bachelor's")}>
                                  <SelectTrigger className="h-8 border-transparent hover:border-input min-w-[90px]"><SelectValue>{row.level}</SelectValue></SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Bachelor's">Bachelor's</SelectItem>
                                    <SelectItem value="Master's">Master's</SelectItem>
                                    <SelectItem value="PhD">PhD</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell className="p-1">
                                <SearchableCombobox
                                  items={programComboboxItems}
                                  value={row.program}
                                  onValueChange={val => updateDatasetRow(idx, 'program', val)}
                                  placeholder="Select program"
                                  searchPlaceholder="Search programs..."
                                  size="sm"
                                  className="w-full border-transparent hover:border-input min-w-[150px]"
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input
                                  type="text" className="h-8 w-16 border-transparent hover:border-input"
                                  value={row.durationYears}
                                  onChange={e => updateDatasetRow(idx, 'durationYears', parseFloat(e.target.value))}
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input
                                  type="text" className="h-8 w-16 border-transparent hover:border-input"
                                  value={row.livingCostIndex}
                                  onChange={e => updateDatasetRow(idx, 'livingCostIndex', parseFloat(e.target.value))}
                                />
                              </TableCell>
                              <TableCell className="p-1">
                                <Input
                                  type="text" className="h-8 w-16 border-transparent hover:border-input"
                                  value={row.exchangeRate}
                                  onChange={e => updateDatasetRow(idx, 'exchangeRate', parseFloat(e.target.value))}
                                />
                              </TableCell>

                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  {/* Tab 2: DESIGN (Field Visibility) */}
                  <TabsContent value="design" className="space-y-4">
                    <div className="rounded-md border mt-4">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="w-[50px] text-center">Show</TableHead>
                            <TableHead className="w-[200px]">Field</TableHead>
                            <TableHead>Preview Value (Current Card)</TableHead>
                            <TableHead className="w-[150px]">Category</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fields.map((field) => (
                            <TableRow key={field.key} className="hover:bg-muted/5">
                              <TableCell className="text-center">
                                <Button
                                  variant="ghost"
                                  size="icon-xs"
                                  className={cn(
                                    "h-6 w-6",
                                    field.visible ? "text-primary bg-primary/10 hover:bg-primary/20" : "text-muted-foreground"
                                  )}
                                  onClick={() => toggleField(field.key)}
                                  title={field.visible ? "Visible on card" : "Hidden from card"}
                                >
                                  {field.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                </Button>
                              </TableCell>
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                  {field.icon}
                                  <span>{field.label}</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground font-normal ml-6 truncate max-w-[120px]">
                                  {field.description}
                                </p>
                              </TableCell>
                              <TableCell>
                                <span className="text-xs">{String(data[field.key])}</span>
                              </TableCell>
                              <TableCell>
                                <Badge variant="secondary" className="text-[10px] font-normal">
                                  {field.category}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Generated Code Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Generated Code
                  </CardTitle>
                  <CardDescription>
                    Copy to your Next.js project
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyCode}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted rounded-lg p-4 overflow-auto max-h-[400px] text-xs">
                  <code className="text-foreground whitespace-pre-wrap break-words">
                    {generateCode()}
                  </code>
                </pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Dependencies
                  </CardTitle>
                  <CardDescription>
                    Install dependencies
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-4 space-y-4">
                  {/* shadcn/ui components command */}
                  <div className="rounded-lg border bg-card overflow-hidden">
                    <div className="flex items-center justify-between border-b px-3 py-2">
                      <div className="flex gap-1">
                        {(["bun", "npm", "pnpm", "yarn"] as const).map((pm) => (
                          <button
                            key={pm}
                            onClick={() => setPackageManager(pm)}
                            className={cn(
                              "px-2 py-1 text-xs font-medium rounded transition-colors",
                              packageManager === pm
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {pm}
                          </button>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={async () => {
                          const cmd = packageManager === "bun"
                            ? "bunx shadcn@latest add card button input label badge separator select"
                            : packageManager === "npm"
                              ? "npx shadcn@latest add card button input label badge separator select"
                              : packageManager === "pnpm"
                                ? "pnpm dlx shadcn@latest add card button input label badge separator select"
                                : "yarn dlx shadcn@latest add card button input label badge separator select"
                          await navigator.clipboard.writeText(cmd)
                          setCopiedCmd("shadcn")
                          setTimeout(() => setCopiedCmd(null), 2000)
                        }}
                      >
                        {copiedCmd === "shadcn" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                    <div className="p-3 bg-muted/30">
                      <code className="text-xs font-mono">
                        {packageManager === "bun" && "bunx shadcn@latest add card button input label badge separator select"}
                        {packageManager === "npm" && "npx shadcn@latest add card button input label badge separator select"}
                        {packageManager === "pnpm" && "pnpm dlx shadcn@latest add card button input label badge separator select"}
                        {packageManager === "yarn" && "yarn dlx shadcn@latest add card button input label badge separator select"}
                      </code>
                    </div>
                  </div>

                  {/* lucide-react icons command */}
                  <div className="rounded-lg border bg-card overflow-hidden">
                    <div className="flex items-center justify-between border-b px-3 py-2">
                      <div className="flex gap-1">
                        {(["bun", "npm", "pnpm", "yarn"] as const).map((pm) => (
                          <button
                            key={pm}
                            onClick={() => setPackageManager(pm)}
                            className={cn(
                              "px-2 py-1 text-xs font-medium rounded transition-colors",
                              packageManager === pm
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {pm}
                          </button>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={async () => {
                          const cmd = packageManager === "bun"
                            ? "bun add lucide-react"
                            : packageManager === "npm"
                              ? "npm install lucide-react"
                              : packageManager === "pnpm"
                                ? "pnpm add lucide-react"
                                : "yarn add lucide-react"
                          await navigator.clipboard.writeText(cmd)
                          setCopiedCmd("lucide")
                          setTimeout(() => setCopiedCmd(null), 2000)
                        }}
                      >
                        {copiedCmd === "lucide" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                    <div className="p-3 bg-muted/30">
                      <code className="text-xs font-mono">
                        {packageManager === "bun" && "bun add lucide-react"}
                        {packageManager === "npm" && "npm install lucide-react"}
                        {packageManager === "pnpm" && "pnpm add lucide-react"}
                        {packageManager === "yarn" && "yarn add lucide-react"}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>



        </div>
      </div>
    </div >
  )
}
