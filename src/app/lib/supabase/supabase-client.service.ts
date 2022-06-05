import { AuthChangeEvent, Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupabaseClientService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

  table(resource: string) {
    return this.supabase.from(resource);
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.supabase.auth.signIn({ email });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }
}
