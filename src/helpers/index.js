export const resultsByPrice = (price, results) => {
  //  price ===  '£' || '££' || '£££' || '££££'
  //  results === results from useResults()
  return results.filter(result => {
    return result.price === price
  })
}