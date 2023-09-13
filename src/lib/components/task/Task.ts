import { writable } from 'svelte/store';

export type Task = {
	completed_at?: string | null;
	created_at?: string;
	description?: string | null;
	id?: string;
	index?: number | null;
	name?: string;
	user_id?: string | null;
	completed?: boolean;
};

export const tasks = writable<Task[]>([]);
