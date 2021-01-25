// #region imports
    // #region libraries
    import vm from 'vm';

    import http from 'http';
    // #endregion libraries
// #endregion imports



// #region module
const baseSandbox = {
    http,
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
            timeout: 30,
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
