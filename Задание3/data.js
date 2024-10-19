
export async function fetchData(url) {
    let isLoading = true
    let error = ''
    let data = []

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Ошибка сети')
      }
      data = await response.json()
    } catch (err) {
      error = 'Произошла ошибка при получении данных: ' + err.message
    } finally {
      isLoading = false
    }

    return { data, isLoading, error }
  }