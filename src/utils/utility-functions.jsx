export const formatDate = (timeStamp, config) => {
    try {

        const date = new Date(timeStamp)
        return new Intl.DateTimeFormat("en-GB",
            config ?
                config :
                {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                }).format(date)
    } catch (error) {
        console.log(error)

    }
}