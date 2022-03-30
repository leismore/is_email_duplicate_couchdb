# is_email_duplicate_couchdb

The CouchDB configuration for LMOS-NodeJS-Apps Is-Email-Duplicate

## Prerequisites

* CouchDB 3.2.1

## Deployment

1. Create a CouchDB user for the Is-Email-Duplicate app
2. Create the following databases (non-partition), if not exists:
  - `<your_prefix_>user`
  - `<your_prefix_>user_authentication`
3. Grant proper permissions to the CouchDB user

For the database `user`:

1. Create a new design document named `is_email_duplicate`
2. Add the map function `get_userID_email`

For the database `user_authentication`:

1. Create a new design document named `is_email_duplicate`
2. Add the map function `is_dup_userID`

## Dependencies

- LMOS CouchDB v3.0.0

## License

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Since 30 March 2022)
