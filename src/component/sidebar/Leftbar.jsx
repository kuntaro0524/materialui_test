import React from "react";
import "./Leftbar.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import AlignVerticalBottomSharpIcon from "@mui/icons-material/AlignVerticalBottomSharp";

export default function Leftbar() {
  return (
    <ul className="leftRegion">
      <li className="leftList">
        <p>スケジュールを確認する</p>
        <AccessTimeIcon />
      </li>
      <li className="leftList">
        <p>写真を取る</p>
        <AddAPhotoIcon />
      </li>
      <li className="leftList">
        <p> 写真を追加する </p>
        <AddPhotoAlternateTwoToneIcon />
      </li>
      <li className="leftList">
        <p>統計学的に情報を整理する</p>
        <AlignVerticalBottomSharpIcon />
      </li>
    </ul>
  );
}
