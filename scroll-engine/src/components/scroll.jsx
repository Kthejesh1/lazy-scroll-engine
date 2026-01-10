import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import _ from 'lodash'
import { fetchData } from "./mock";

const limitArr = Array(10).fill();
const InfiniteScroll = (props) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0)

  const [startInd, setStartInd] = useState(0);

  let limit = 5;

  useEffect(() => {}, []);

  useEffect(() => {
    console.log('Block eff')
    window.addEventListener("scroll", () => {
      console.log("window scroll", window.scrollY);
    });
  }, []);

  useEffect(() => {
      fetchData(setPosts, page);
  }, [page]);

  useEffect(() => {
    console.log('posts ', posts)
  }, [posts]);

  useEffect(() => {
   console.log("block data" , {page, posts});
  }, [page, posts])
  
  
  

  const handleScrollT = useCallback(_.throttle(handleScroll, 1000), []);

  function handleScroll(e) {
    let el = e?.target;

    // setStartInd(Math.floor(el?.scrollTop / 100));
    let loadEl = document.getElementById('empty');
    let client = loadEl.getBoundingClientRect();
    

    if(client.top < 500) {
      setPage(page => page + 1);
    } 
  }

  // const fetchData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts?limit=10")
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // };

  return (
    <Container>
      <List id="list-container" onScroll={handleScrollT}>
        {posts.map((post, ind) => {
          return (
            <div className='item'>
              <h2>{post?.id} {post?.title}</h2>
              <div>{post?.body} </div>
            </div>
          );
        })}
        <div id='empty'>Loading...</div>
      </List>
    </Container>
  );
};

export default InfiniteScroll;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 40rem;
  overflow: auto;
  .item {
    display: flex;
    flex-direction: column;
    height: 6rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
  #empty {
    display: flex;
    min-height: 10rem;
    min-width: 100%;
    /* background-color: aliceblue; */
    justify-content: center;
    align-items: center;
  }
`;

const debounceFunc = (func, delay) => {
  let called;

  return (...args) => {
    if (called) {
      return;
    }
    func.apply(this, args);
    called = true;
    setTimeout(() => (called = false), delay);
  };
};
