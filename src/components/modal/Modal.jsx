import React, { useState, useContext, useRef } from "react";

// PACKAGES

// COMPONENTS
import styles from "./Modal.module.css";
import { Context } from "./../../store/Context";
import ratingImg from "../../assets/rating.png";
import { postDataApi } from "../../utils/fetchData";

// initial state
const initialState = {
  fullname: "",
  rating: "",
  comment: "",
  err: "",
};

const Modal = () => {
  const [dispatch] = useContext(Context);
  const [rate, setRate] = useState(initialState);
  const clickRef = useRef();
  const { rating, comment, fullname } = rate;

  // the handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRate({ ...rate, [name]: value });
  };

  //   The handleClick outside function

  // HANDLECLICK OUTSIDE SIDE EFFECT

  const handleClickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      return dispatch({ type: "OPEN_MODAL", payload: false });
    }
  };

  window.document.addEventListener("mousedown", handleClickOutside);

  // The HandleSubmit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postDataApi("rating", rate);
      console.log(res);
      dispatch({ type: "CREATE_REVIEW", payload: res });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer} ref={clickRef}>
        <h3>Do you like what you see? </h3>
        <div className={styles.rating_img}>
          <img src={ratingImg} alt="rating-pic" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="fname" className={styles.form_label}>
              Your name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              name="fullname"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="rating" className={styles.form_label}>
              Share your experience
            </label>
            <select
              id="rating"
              className="form-control"
              name="rating"
              value={rating}
              onChange={handleChange}
            >
              <option style={{ background: "rgb(5, 1, 19)" }} value>
                Rating
              </option>
              <option style={{ background: "rgb(5, 1, 19)" }} value="1">
                1 - star
              </option>
              <option style={{ background: "rgb(5, 1, 19)" }} value="2">
                2 - stars
              </option>
              <option style={{ background: "rgb(5, 1, 19)" }} value="3">
                3 - stars
              </option>
              <option style={{ background: "rgb(5, 1, 19)" }} value="4">
                4 - stars
              </option>
              <option style={{ background: "rgb(5, 1, 19)" }} value="5">
                5 - stars
              </option>
            </select>
          </div>

          <div className={styles.form_group}>
            <textarea
              className="form-control"
              placeholder="Kindly leave a comment"
              name="comment"
              value={comment}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles.button_div}>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
