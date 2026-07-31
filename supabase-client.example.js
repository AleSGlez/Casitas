// Copia este archivo como `supabase-client.js` y pon tus propias credenciales.
// Encuéntralas en: Supabase → tu proyecto → Settings → API
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_KEY_AQUI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
