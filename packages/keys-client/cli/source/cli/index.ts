// #region imports
    // #region libraries
    import program, {
        CommanderStatic,
    } from 'commander';
    // #endregion libraries


    // #region external
    import {
        status,
        login,
        logout,
    } from '../commands';
    // #endregion external
// #endregion imports



// #region module
const main = async (
    program: CommanderStatic,
) => {
    program
        .storeOptionsAsProperties(false)
        .passCommandToAction(false);

    program
        .name('keys')
        .usage('<command>')
        .version('0.0.0-0', '-v, --version')
        .action(() => {
            program.outputHelp();
        });


    program
        .command('status')
        .description('show the connection status')
        .action(async () => {
            console.log('status');
            // await status();
        });


    program
        .command('login')
        .description('log into a keys server using the identonym and the key')
        .requiredOption(
            '-s, --server <server>',
            'server address',
        )
        .requiredOption(
            '-i, --identonym <identonym>',
            'identonym',
        )
        .requiredOption(
            '-k, --key <key>',
            'key',
        )
        .action(async (options: any) => {
            console.log(options);
            // await login(
            //     options.server,
            //     options.identonym,
            //     options.key,
            // );
        });


    program
        .command('logout')
        .option(
            '-s, --server <server>',
            'server address',
        )
        .option(
            '-i, --identonym <identonym>',
            'identonym',
        )
        .description('log out of a keys server, default or specified')
        .action(async (options: any) => {
            console.log(options);
            // await logout(
            //     options.server,
            //     options.identonym,
            // );
        });


    program
        .command('store <name>')
        .option(
            '-t, --type <type>',
            'type',
            'webservice',
        )
        .option(
            '-a, --address <address>',
            'address',
        )
        .option(
            '--key-kind <key-kind>',
            'key-kind',
            'key',
        )
        .option(
            '-k, --key-value <key-value>',
            'key-value',
        )
        .option(
            '--id-kind <id-kind>',
            'id-kind',
            'identonym',
        )
        .option(
            '-i, --id-value <id-value>',
            'id-value',
        )
        .option(
            '-g, --group <group>',
            'group',
        )
        .option(
            '--group-key <group-key>',
            'group-key',
        )
        .option(
            '--server <server>',
            'server',
        )
        .description('store a key for a service')
        .action(async (
            name,
            options: any,
        ) => {
            console.log(name, options);
        });


    program
        .command('list <type>')
        .description('list values for a certain "type", or for "all"')
        .action(async (
            type,
            options: any,
        ) => {
            console.log(type, options);
        });


    program
        .command('assign <group> <service>')
        .option(
            '-k, --group-key <value>',
            'group key value',
        )
        .description('assign service to group')
        .action(async (
            group,
            service,
            options: any,
        ) => {
            console.log(group, service, options);
        });


    program
        .command('deassign <group> <service>')
        .option(
            '-k, --group-key <value>',
            'group key value',
        )
        .description('deassign service from group')
        .action(async (
            group,
            service,
            options: any,
        ) => {
            console.log(group, service, options);
        });


    program
        .command('refresh <name>')
        .option(
            '-s, --show',
            'show new value',
        )
        .option(
            '-v, --value <value>',
            'new value, by default it generates a random value',
        )
        .description('refresh the key for a service')
        .action(async (
            name,
            options: any,
        ) => {
            console.log(name, options);
        });


    program
        .command('refresher <name> [path]')
        .option(
            '-d, --default [value]',
            'check for the default refresher script on the service\'s address, or in another location',
        )
        .description('set refresher script for service')
        .action(async (
            name,
            path,
            options: any,
        ) => {
            console.log(name, path, options);
        });


    program.parseAsync(process.argv);
}


const cli = () => {
    main(program);
}
// #endregion module



// #region exports
export default cli;
// #endregion exports
