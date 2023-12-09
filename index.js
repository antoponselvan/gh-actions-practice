import * as _ from 'lodash'

export const handler = async () => {
  const max = 10
  const val = _.random(max)
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Wassup from lambda! - Random# : ${val} - Change time : 9:37AM 9th Dec`)
  }
  return response
}