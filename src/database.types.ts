export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			profiles: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
					updated_at: string | null;
					username: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'profiles_id_fkey';
						columns: ['id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			tasks: {
				Row: {
					completed_at: string | null;
					created_at: string;
					description: string | null;
					id: string;
					index: number;
					name: string;
					user_id: string | null;
					completed: boolean;
				};
				Insert: {
					completed_at?: string | null;
					created_at?: string;
					description?: string | null;
					id?: string;
					index?: number | null;
					name: string;
					user_id?: string | null;
					completed?: boolean;
				};
				Update: {
					completed_at?: string | null;
					created_at?: string;
					description?: string | null;
					id?: string;
					index?: number | null;
					name?: string;
					user_id?: string | null;
					completed?: boolean;
				};
				Relationships: [
					{
						foreignKeyName: 'tasks_user_id_fkey';
						columns: ['user_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
