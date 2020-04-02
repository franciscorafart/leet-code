/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
    const filteredEmails = emails.map(email => email.split('@'))
        .map(([local, domain]) => [local.split('+')[0], domain] )
            .map(([local, domain]) => [local.split('.').join(''), domain])
                .map(([local, domain]) => local.concat('@').concat(domain))

    const emailSet = new Set(filteredEmails);

    return emailSet.size
};