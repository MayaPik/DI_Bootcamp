const mergeWords = (final) => (str2) => {
  if (str2 === undefined) {
    return final
  } 
  else {
      return mergeWords(final = final + " " + str2)
  }
}

mergeWords('Hello')()

mergeWords('There')('is')('no')('spoon.')();
