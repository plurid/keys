// #region imports
    // #region libraries
    import vm from 'vm';
    // #endregion libraries
// #endregion imports



// #region module
const refresher = async (
    name: any,
    path: any,
    options: any,
) => {
    console.log(name, path, options);

    const keysData = {
        key: 'one',
    };

    const refresherScript = `
        const refresher = () => {
            console.log('outerData', keysData);
            return keysData;
            // return true;
        }

        const result = refresher();
        result;
    `;

    const obj = vm.runInNewContext(
        refresherScript,
        {
            keysData,
        },
        {
            timeout: 30,
        },
    );
    console.log(obj);
}
// #endregion module



// #region exports
export default refresher;
// #endregion exports
