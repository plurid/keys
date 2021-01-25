// #region imports
    // #region libraries
    import vm from 'vm';

    import http from 'http';

    import fetch from 'cross-fetch';

    import * as Apollo from '@apollo/client';
    // #endregion libraries
// #endregion imports



// #region module
const baseSandbox = {
    http,
    Apollo,
    fetch,
};

const vmRunner = (
    code: string,
    sandbox: any,
) => {
    const obj = vm.runInNewContext(
        code,
        {
            ...sandbox,
            ...baseSandbox,
        },
        {
            // in ms
            timeout: 30_000,
            // https://nodejs.org/api/vm.html#vm_timeout_interactions_with_asynchronous_tasks_and_promises
            microtaskMode: 'afterEvaluate',
        },
    );

    return obj;
}
// #endregion module



// #region exports
export default vmRunner;
// #endregion exports
