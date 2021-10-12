import { createClient } from '@supabase/supabase-js'


console.log(process.env.SUPABASE_URL)

export const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_TOKEN)