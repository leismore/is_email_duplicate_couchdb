/**
 * CouchDB Map function: get_userID_email
 */

function(doc)
{
    if (doc.userID !== undefined && (doc.email !== undefined && 'address' in doc.email) )
    {
        emit(doc.email.address.toLowerCase(), doc.userID);
    }
}
