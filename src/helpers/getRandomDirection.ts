import _ from 'lodash'

const directions = ['swipeDown', 'swipeLeft', 'swipeRight', 'swipeUp']

export const getRandomDirection = (): string | undefined => {
  return _.sample<string>(directions)
}
