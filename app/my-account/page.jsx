import { Posts, getXataClient } from "../xata"

const xata = getXataClient()

export default function PostsListPage() {
  const fetchData = async () => {
    const records = await xata.db.Posts.getMany()
    const formattedRecords = records.map((record) => ({
      ...record,
      pubDate: record.pubDate?.toDateString(),
    }))
    records(formattedRecords)
  }

  fetchData()

  return (
    <>
      <h1>My xata posts</h1>
      {records.map((record) => (
        <div key={record.id}>
          <h2>{record.title}</h2>
          <p>{record.id}</p>
          <p>{record.body}</p>
          <p>{record.pubDate}</p>
        </div>
      ))}
    </>
  )
}
