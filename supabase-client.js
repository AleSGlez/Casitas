// Supabase client for Rental Property Management App.
// Project ref: jrunfxkimcxzqqgssayf
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://jrunfxkimcxzqqgssayf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydW5meGtpbWN4enFxZ3NzYXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMDU1MzQsImV4cCI6MjEwMDc4MTUzNH0.pgtxUgnpm-AuBm9ddU6h4kN2JGXCwCwggvhfxxpCWr0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
