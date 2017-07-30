export function countVotes(tally) {
    return (
        tally ?
        tally.reduce((totalVotes, entries) => totalVotes + entries, 0) :
        0
    )
}
