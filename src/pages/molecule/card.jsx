import BlueIcon from "../../assets/svgs/Card-Icon-1.svg";
import PurpleIcon from "../../assets/svgs/Card-Icon-2.svg";
import GreenIcon from "../../assets/svgs/LoanDisbursedIcon.svg";
import OrangeIcon from "../../assets/svgs/LoanRepaidIcon.svg";
import { useState } from "react";
import "../../styles/card.css";

const Card = () => {
  const [totalSavings, setTotalSavings] = useState(123334);
  const [totalLoan, setTotalLoan] = useState(123334);
  const [totalWithdrawal, setTotalWithdrawal] = useState(123334);
  const [totalHiredPurchase, setTotalHiredPurchase] = useState(123334);

  return (
    <div className="flex flex-wrap justify-between pt-5 pl-5 pr-5 pb-0" >
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-2">
        <div className="bg-white p-4 h-full rounded-xl border-2 border-solid border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">₦134,009</p>
              <p className="mt-2 text-sm">Total Revenue</p>
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-green-200">
              <img src={GreenIcon} alt="Green Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-2">
        <div className="bg-white p-4 h-full rounded-xl border-2 border-solid border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">₦{totalLoan}</p>
              <p className="mt-2 text-sm">Total Customers</p>
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-purple-200">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVR4nO1Uy0rDUBDNXv0AXxvF/1BRQSuZieCX2Db3toKgrvRLRNz4WPiovyNSq5lJ6wOEysSbmiamiYq6yYGBNpk5M+fcm7GsAgUKFPgGFNKqBmpo5LYC9uV3zaGS9RfQQLsauftZKKCd31eO0oyeFVC55rRHg0CqyDN59yMnqk5nQiEdamSWUEBHm2s0Exng2igtx2s1cDUYDqiRly/ZHLiVtJVbtVJnPGjyTtQV1fH6it0ZMzWcly9ur0za1cAnkiChgE+N4gOj0sscANjLy9dvYaguMl0dHiejpBrpMshBqiQEALsm9zwvX8wBJnkp1qUVKPSWwksoZy6qJaS5AnoJ1Nn+Ql6+T49AbJIiCY18FrdMI++nf4a891W+HuroTQdLJUnqqzVvSnJcmx0NfJc2gEZqamDMy9cHWSKDFozZfq/Bf+RjF/zZjcWbIQlt+3Ny2cxn+GpyUxeWRtqON18xjV5SzxboyTTXielDHuR6X+4AvhrScqSQrow9burtNsqtDPScyOBTwBfRyR/koUw5YMF0xfasAVzHnw/zM/jus7g+VBnCrfXb4azcit0cCfNzNyhQoEAB6x/xBnL2elZhM1ZmAAAAAElFTkSuQmCC" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-2">
        <div className="bg-white p-4 h-full rounded-xl border-2 border-solid border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">₦{totalHiredPurchase}</p>
              <p className="mt-2 text-sm">Total Transaction</p>
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-red-200">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nN1VMWgUQRQ9NVFBRZEUKghaKZjCTgTlQAIectzue+tYBZLqikQiSaGVpLGIGgtJa2EhgkWwsBBbCRYBC1FRiBAU7cVo7v6cOvI3s8tlbzfepczAcbc78997//3/50qlLb1cudzXCsOqBZ5YclmAhgA/LfDRAo8liq44Y3ZuCrxFXrTAZ0u6/3w+NcOQ3asulbYJcE/IvzGAqiWnJAhOuyA44IaH90gUnbLkNUu+TYiEvOump7cXAsdqo+iMALfiAMBa8roSpuQKDgymz8bssMC4AOJj7hQTrB1Y9d+/W+SlDtuAipDPc95fSEiaZFhIkKYLzGb3hRzVLAVYEXJG1Wfir3pLl3ILnyH4rnale1F0XoA/FvhqgTceaLI93tv1zsebDgIBFjLdsZwSADc96FgjCI7FVgIPO0QCkz72UamXZYGxJFCL7ow55EZGdueIHEw6rycCV60OWPKbT3+hvZPWnavV9vmW/dGxKcCcTmd7W7avX7XaEc1A5yO2KAzP9kZALlryS96wuHK5zxmz358b9TY87cki9VQV5Km3wANV5YDDq0Fw1Ktc3FSR1e+cwBve/5cCvPC/53La9H08bMDlXHC9X9TjFjmUzc6uZdHUKbfkvDNmb0bERDpo9Xp/LoFeBZZ83SRPFlg1LuT9jjhyyN9drhmGQaE9mZQP2jA8t+5dtTrQMOZ4xpaJBFyA212Bx2rJebWracyJFLBe71drfLdMJZ4n4Bte1wVpz7pKZZc+C/kq9w8HWOralo2WkM98kVcs8EFbUbulsKBbZv0Dfj31paU5t80AAAAASUVORK5CYII=" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 px-2">
        <div className="bg-white p-4 h-full rounded-xl border-2 border-solid border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">₦{totalWithdrawal}</p>
              <p className="mt-2 text-sm">Total Withdrawal</p>
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-purple-200">
              <img src={PurpleIcon} alt="Purple Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
