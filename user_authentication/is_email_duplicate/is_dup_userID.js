/**
 * CouchDB Map function: is_dup_userID
 */

function(doc)
{
    if (doc.userID !== undefined && doc.active === true )
    {
        emit(doc.userID, true);
    }
}
