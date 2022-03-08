// logout, login and selectUser reducers from user slice
import { selectUser } from "./../features/userSlice";
// use selector from redux
import { useSelector } from "react-redux";
// auth form firebase
import { auth } from "../firebase";
// avatar image
import Avatar from "./../assets/imgs/no-av.png";

// style
import "./../styles/css/profile.css";
import { useEffect, useState } from "react";

const Profile = () => {
  // plans
  const [plans, setPlans] = useState([
    {
      id: 0,
      name: "basic",
      des: "480p",
      rate: "20",
      isCurrent: false,
    },
    {
      id: 1,
      name: "standard",
      des: "720p",
      rate: "50",
      isCurrent: false,
    },
    {
      id: 2,
      name: "premium",
      des: "1080p",
      rate: "80",
      isCurrent: false,
    },
    {
      id: 3,
      name: "diamond",
      des: "4k",
      rate: "100",
      isCurrent: true,
    },
  ]);
  const user = useSelector(selectUser);
  // current plan
  const [current, setCurrent] = useState(
    plans.find((plan) => {
      if (plan.isCurrent === true) return plan;
    })
  );

  const changeCurrent = (id) => {
    let newPlans = [];
    plans.forEach((plan, i) => {
      if (plan.isCurrent === true) {
        plan["isCurrent"] = false;
      }
      if (plan.id === id) {
        plan["isCurrent"] = true;
      }
      newPlans.push(plan);
    });
    setPlans(newPlans);
  };

  useEffect(() => {
    setCurrent(
      plans.find((plan) => {
        if (plan.isCurrent === true) return plan;
      })
    );
  }, [plans]);

  return (
    <>
      <div className="profile">
        <h2>edit profile</h2>
        <div className="profile-con">
          <img src={Avatar} alt="avtar" />
          <p className="profile-con-useremail">{user.email}</p>
          <div className="profile-con-plans-con">
            <h3>plans</h3>
            <p>
              current plan:
              <span>{current.name}</span>
            </p>
            <div className="profile-con-plans-con-plans">
              {plans.map((plan) => {
                return (
                  <div
                    className={`${
                      plan.isCurrent && "plan-current"
                    } profile-con-plans-con-plans-plan`}
                    key={plan.id}
                  >
                    <p className="profile-con-plans-con-plans-plan-name">
                      widdflix {plan.name}
                    </p>
                    <p className="profile-con-plans-con-plans-plan-des">
                      {plan.des}
                    </p>
                    <p className="profile-con-plans-con-plans-plan-rate">
                      $ {plan.rate} /m
                    </p>
                    <button
                      onClick={() => changeCurrent(plan.id)}
                      className={`profile-con-plans-con-plans-plan-sub ${
                        plan.isCurrent ? "current-btn" : ""
                      }`}
                    >
                      {plan.isCurrent ? "current plan" : "subscibe"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => auth.signOut()}
            className="profile-con-signout"
          >
            sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
