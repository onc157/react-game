import _ from 'lodash'

export const getRandomFieldValue = (): number => {
  return _.random(1, true) > 0.3 ? 2 : 4
}
