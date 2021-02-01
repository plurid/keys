// #region imports
    // #region external
    import {
        DatabaseType,
        StorageType,
    } from '~server/data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export const DATABASE_TYPE = (process.env.KEYS_DATABASE_TYPE as DatabaseType | undefined)
    || 'mongo';

export const STORAGE_TYPE = (process.env.KEYS_STORAGE_TYPE as StorageType | undefined)
    || 'filesystem';


export const LOG_LEVEL = process.env.KEYS_LOG_LEVEL || '7';
export const QUIET = process.env.KEYS_QUIET === 'true';

export const logLevel = QUIET
    ? 0
    : parseInt(LOG_LEVEL);


export const CUSTOM_LOGIC_USAGE = process.env.KEYS_CUSTOM_LOGIC_USAGE === 'true';


export const PRIVATE_USAGE = process.env.KEYS_PRIVATE_USAGE === 'true'
export const PRIVATE_OWNER_IDENTONYM = process.env.KEYS_PRIVATE_OWNER_IDENTONYM || '';
export const PRIVATE_OWNER_KEY = process.env.KEYS_PRIVATE_OWNER_KEY || '';
export const PRIVATE_TOKEN = process.env.KEYS_PRIVATE_TOKEN || '';


export const MONGO_USERNAME = process.env.KEYS_MONGO_USERNAME || '';
export const MONGO_PASSWORD = process.env.KEYS_MONGO_PASSWORD || '';
export const MONGO_ADDRESS = process.env.KEYS_MONGO_ADDRESS || '';
export const MONGO_CONNECTION_STRING = process.env.KEYS_MONGO_CONNECTION_STRING || '';


// #endregion module
