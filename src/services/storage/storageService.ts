export interface StorageService {
    getItem: <T>(key: string) => Promise<T | null>;
    setItem: <T>(key: string, value: T) => Promise<void>;
}

export let storageService: StorageService;

export function initializeStorageService(storage: StorageService) {
    storageService = storage;
}
