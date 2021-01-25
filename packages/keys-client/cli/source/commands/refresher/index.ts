// #region imports
    // #region libraries
    import vm from 'vm';

    import {
        sha512,
    } from 'js-sha512';
    // #endregion libraries


    // #region external
    import vmRunner from '../../services/vmRunner';
    // #endregion external
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

    // verify script hash
    const hash = sha512(refresherScript);

    const sandbox = {
        keysData,
    };

    const obj = vmRunner(
        refresherScript,
        sandbox,
    );
    console.log(obj);
}
// #endregion module



// #region exports
export default refresher;
// #endregion exports
