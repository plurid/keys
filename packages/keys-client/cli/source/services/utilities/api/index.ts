// #region imports
    // #region external
    // import {
    //     KEYS_COOKIE,
    // } from '../../../data/constants';

    import {
        client,
    } from '../../graphql';

    import {
        getConfiguration,
    } from '../configuration';
    // #endregion external
// #endregion imports



// #region module
const keysCookieFromToken = (
    token: string,
) => {
    // return DELOG_COOKIE + '=' + token;
    return token;
}


const getKeys = async (
    server?: string,
    identonym?: string,
) => {
    const configuration = await getConfiguration(
        server,
        identonym,
    );

    if (!configuration) {
        return {
            keys: undefined,
            configuration: undefined,
        };
    }

    const {
        token,
    } = configuration;

    if (!token || !configuration.server) {
        return {
            keys: undefined,
            configuration: undefined,
        };
    }

    const cookie = keysCookieFromToken(token);

    const keys = client(
        configuration.server,
        cookie,
    );

    return {
        keys,
        configuration,
    };
}
// #endregion module



// #region exports
export {
    keysCookieFromToken,
    getKeys,
};
// #endregion exports
