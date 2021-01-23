# Keys



## About

CLI/Web interface tool for the control of all the keys

Stores the keys for various web services

keys store --name google --type webservice --address google.com \
    --key-kind password --key-value OneTwoThree --id-kind username --id-value SomeUsername

keys store --name plurid --type webservice --address plurid.com \
    --key-kind key --key-value OneTwoThree --id-kind identonym --id-value SomeUsername


Refreshes the keys based on a well-known scripts

key refresh plurid --show


<-> for all keys :: do action -> refresh


plurid.com/.well-known/keys/refresh


``` typescript
import data from 'data';

import graphqlClient, {
    gql,
} from 'client';

const mutationQuery = gql`
    mutation
`;

const refresh = async () => {
    graphqlClient.mutate({
        mutation: mutationQuery,
        variables: {
            input: data.refreshKey,
        },
    });
}

export default refresh;
```



## Issues

+ complexity - handled by the scripted meta-controller which can be defined (templated) both by the service and by the user
+ powerfulness - it can be too powerful for its own good.
+ keys server - security is paramount



## Description

Service Keys -- each service has one or more keys

Group Key -- services can be grouped (even nested), for which you need keys

Login Key -- allows default access to the service keys

Admin Key -- allows admin setup (login, group key reset)


- Login Key - DogsAreNicePets3$2
- Admin Key - WhalesAreNicePets6%$
- Groups
    - Banking Group - CatsAreNicePets553
    - Social Media Group - BatsAreNicePets13%
    - Productivity Tools Group - SnakesAreNicePets56%
        - Services
            - plurid.com Service - ListeningToGalveston78!


## Server Features

+ Notify (on email or elsewhere) after 2nd attempt
+ 3 Attempts per Hour (or less often)
+ ...
