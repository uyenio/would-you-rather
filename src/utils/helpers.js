export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question

  return {
    id,
    timestamp,
    optionOne,
    optionTwo
  }
}