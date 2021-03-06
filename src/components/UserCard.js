import styled from "styled-components";
import styles from "../styles";

export default styled.div`
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 0px 0px ${styles.colors.cyan};
  overflow: hidden;
  margin-bottom: 10px;
  color: ${styles.colors.crimson};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-shadow: 2px 2px 0px #01ffff69;
  transition: all 0.3s ease;

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  img {
    width: 70px;
    border-radius: 50%;
    height: 70px;
    max-width: 100%;
  }

  h1 {
    width: 10%;
    color: ${styles.colors.crimson};
  }

  .__user--detail {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    h3 {
      margin-left: 20px;
      text-transform: lowercase;
      text-shadow: none;
      text-shadow: 2px 2px 0px #01ffff69;
    }
  }

  .__score-cont {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
  }

  .__score {
    width: 15%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .__label {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0.2;
      font-size: 0.8rem;
      text-shadow: none;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 0px 0px ${styles.colors.cyan};
    transform: scale(1.01);

    .__score {
      .__label {
        opacity: 1;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    h1 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 0.8rem;
    }

    img {
      width: 50px;
      border-radius: 50%;
      height: 50px;
      max-width: 100%;
    }

    .__score-cont {
      display: flex;
      flex: 1;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      padding-top: 20px;
    }

    .__user--detail {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      h3 {
        margin-left: 0;
      }
    }

    .__score {
      h2 {
        font-size: 1rem;
      }
      .__label {
        font-size: 0.7rem;
        opacity: 0.6;
      }
    }
  }
`;
