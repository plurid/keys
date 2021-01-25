// #region imports
    // #region libraries
    import vm from 'vm';

    import {
        sha512,
    } from 'js-sha512';
    // #endregion libraries
// #endregion imports



// #region module
const refresher = async (
    name: any,
    path: any,
    options: any,
) => {
    // the refresher checks if the script sha equals before registration

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

    const hash = sha512(refresherScript);
    // verify hash

    const sandbox = {
        keysData,
    };

    const obj = vm.runInNewContext(
        refresherScript,
        sandbox,
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
