'use strict'

// 2016-04-01
// O(n lg n) time and O(n) space

module.exports = function condenseMeetingTimes(meetings) {
  const sortedMeetings = meetings.sort((a, b) => {
    return a.startTime > b.startTime ? 1 : -1
  })

  const mergedMeetings = []

  const firstMeeting = sortedMeetings[0]
  let previousStart = firstMeeting.startTime
  let previousEnd = firstMeeting.endTime

  for (let i = 1, len = sortedMeetings.length; i < len; i++) {
    const currentMeeting = sortedMeetings[i]
    const currentStart = currentMeeting.startTime
    const currentEnd = currentMeeting.endTime

    if (currentStart <= previousEnd && currentEnd >= previousEnd) {
      previousEnd = currentEnd
    } else {
      mergedMeetings.push({ startTime: previousStart, endTime: previousEnd })
      previousStart = currentStart
      previousEnd = currentEnd
    }
  }

  mergedMeetings.push({ startTime: previousStart, endTime: previousEnd })

  return mergedMeetings
}
