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
        const graphqlEndpoint = 'https://rickandmortyapi.com/graphql';

        const client = new Apollo.ApolloClient({
            link: Apollo.createHttpLink({
                uri: graphqlEndpoint,
                credentials: 'include',
                fetch,
            }),
            cache: new Apollo.InMemoryCache(),
        });

        const querier = async () => {
            const query = await client.query({
                query: Apollo.gql\`
                    query {
                        characters(page: 2, filter: { name: "rick" }) {
                            info {
                                count
                            }
                            results {
                                name
                            }
                        }
                        location(id: 1) {
                            id
                        }
                        episodesByIds(ids: [1, 2]) {
                            id
                        }
                    }
                \`,
            });

            return {
                keysData,
                query,
            };
        }

        const result = querier();
        result;


        // const refresher = () => {
        //     console.log('outerData', keysData);
        //     return keysData;
        //     // return true;
        // }

        // const result = refresher();
        // result;
    `;

    // verify script hash
    const hash = sha512(refresherScript);

    const sandbox = {
        keysData,
    };

    const obj = await vmRunner(
        refresherScript,
        sandbox,
    );
    console.log(obj);
}
// #endregion module



// #region exports
export default refresher;
// #endregion exports
