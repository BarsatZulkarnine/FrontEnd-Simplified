import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState();
  const [searchId, setSearchID] = useState(id);

  async function fetchPost(userId) {
    setLoading(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
    );
    setPost(data);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchPost();
  }, []);

  function onSearch() {
    fetchPost(searchId);
  }
  return (
    <>
      <div>
        <div className="post__search">
          <button>← Back</button>
          <div className="post__search--container">
            <label className="post__search--label">Search by Id</label>
            <input
              type="number"
              value={searchId}
              onChange={(event) => setSearchID(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  onSearch()
                }
              }}
            />
            <button onClick={() => onSearch()}>Enter</button>
          </div>
        </div>
        {!loading ? (
          post.map((post) => (
            <div key={post.id} className="post">
              <div className="post__title">{post.title}</div>
              <p className="post__body">{post.body}</p>
            </div>
          ))
        ) : (
          <div className="post">
            <div className="post__title">
              <div className="post__title--skeleton"></div>
            </div>
            <div className="post__body">
              <p className="post__body--skeleton"></p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Posts;
