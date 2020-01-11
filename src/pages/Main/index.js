import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

import { Container } from "./styles";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import itsamatch from "../../assets/itsamatch.png";

export default function Main({ match }) {
  const [devs, setDevs] = useState(null);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs", {
        headers: { user: match.params.id }
      });
      setDevs(response.data);
    }

    loadDevs();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io(api.defaults.baseURL, {
      query: { user: match.params.id }
    });

    socket.on("match", dev => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setDevs(devs.filter(dev => dev._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setDevs(devs.filter(dev => dev._id !== id));
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      {devs && devs.length > 0 ? (
        <ul>
          {devs.map(dev => (
            <li key={dev._id}>
              <img src={dev.avatar} alt={dev.name} />
              <footer>
                <strong>{dev.name}</strong>
                <p>{dev.bio}</p>
              </footer>
              <div className="button-container">
                <button
                  type="button"
                  id="dislike"
                  onClick={() => handleDislike(dev._id)}
                >
                  <img src={dislike} alt="Dislike" />
                </button>
                <button
                  type="button"
                  id="like"
                  onClick={() => handleLike(dev._id)}
                >
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-container">Acabou :(</div>
      )}
      {matchDev && (
        <div className="match-container">
          <img src={itsamatch} alt="It's a match" />

          <img className="avatar" src={matchDev.avatar} alt="" />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>

          <button type="button" onClick={() => setMatchDev(null)}>
            FECHAR
          </button>
        </div>
      )}
    </Container>
  );
}
