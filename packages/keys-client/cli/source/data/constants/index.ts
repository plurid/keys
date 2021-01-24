// #region imports
    // #region libraries
    import os from 'os';
    import path from 'path';
    // #endregion libraries
// #endregion imports



// #region module
const homeDirectory = os.homedir();

const KEYS_CONFIGURATION_FILE = '.keys.config.deon';
const keysConfigurationPath = path.join(
    homeDirectory,
    KEYS_CONFIGURATION_FILE
);
// #endregion module



// #region exports
export {
    homeDirectory,

    KEYS_CONFIGURATION_FILE,
    keysConfigurationPath,
};
// #endregion exports
