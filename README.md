# Papercups Node.js Library

[![Version](https://img.shields.io/npm/v/@papercups-io/papercups.svg)](https://www.npmjs.com/package/@papercups-io/papercups)
[![Downloads](https://img.shields.io/npm/dm/@papercups-io/papercups.svg)](https://www.npmjs.com/package/@papercups-io/papercups)
[![Try on RunKit](https://badge.runkitcdn.com/@papercups-io/papercups.svg)](https://runkit.com/npm/@papercups-io/papercups)

The Papercups Node library provides convenient access to the [Papercups](https://github.com/papercups-io/papercups) API from
applications written in server-side JavaScript.

## Installation

Install the package with:

```sh
npm install @papercups-io/papercups --save
# or
yarn add @papercups-io/papercups
```

## Usage

The package needs to be configured with an API key, which is
available in the [Papercups dashboard](https://app.papercups.io/developers/personal-api-keys). Require the package with the key's value:

```js
const papercups = require('@papercups-io/papercups')('PAPERCUPS_API_KEY');

papercups.messages
  .create({
    body: 'Hello world!',
    conversation_id: '...',
  })
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
```

If you're self-hosting Papercups on a different server, you can specify the API host:

```js
const papercups = require('@papercups-io/papercups')('PAPERCUPS_API_KEY', {
  host: 'https://papercups.mycompany.co',
});
```

## Methods

### Conversations

API reference: https://docs.papercups.io/api-endpoints#conversations

#### List conversations

```js
await papercups.conversations.list(params);
```

#### Retrieve a conversation

```js
await papercups.conversations.retrieve(id);
```

#### Create a conversation

```js
await papercups.conversations.create(params);
```

#### Update a conversation

```js
await papercups.conversations.update(id, updates);
```

#### Delete a conversation

```js
await papercups.conversations.delete(id, updates);
```

### Messages

API reference: https://docs.papercups.io/api-endpoints#messages

#### List messages

```js
await papercups.messages.list(params);
```

#### Retrieve a message

```js
await papercups.messages.retrieve(id);
```

#### Create a message

```js
await papercups.messages.create(params);
```

#### Update a message

```js
await papercups.messages.update(id, updates);
```

#### Delete a message

```js
await papercups.messages.delete(id, updates);
```

### Customers

API reference: https://docs.papercups.io/api-endpoints#customers

#### List customers

```js
await papercups.customers.list(params);
```

#### Retrieve a customer

```js
await papercups.customers.retrieve(id);
```

#### Create a customer

```js
await papercups.customers.create(params);
```

#### Update a customer

```js
await papercups.customers.update(id, updates);
```

#### Delete a customer

```js
await papercups.customers.delete(id);
```

### Users

API reference: https://docs.papercups.io/api-endpoints#users

#### Retrieve the current user

```js
await papercups.users.me();
```

#### List the active users on your team

```js
await papercups.users.list();
```

#### Retrieve a specific user on your team

```js
await papercups.users.retrieve(id);
```
