import React from "react";

import "tui-time-picker/dist/tui-time-picker.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-calendar/dist/tui-calendar.css";
import "./app.css";

import Calendar from "./index";
import myTheme from "./myTheme";
import { Radio } from "antd";

const today = new Date();
const getDate = (type, start, value, operator) => {
  start = new Date(start);
  type = type.charAt(0).toUpperCase() + type.slice(1);

  if (operator === "+") {
    start[`set${type}`](start[`get${type}`]() + value);
  } else {
    start[`set${type}`](start[`get${type}`]() - value);
  }

  return start;
};

const options = [
  { label: "month", value: "month" },
  { label: "week", value: "week" },
  { label: "day", value: "day" },
];

class MyCalendar extends React.Component {
  ref = React.createRef();

  calendarInst = null;

  state = {
    dateRange: "",
    selectedView: "month",
    viewModeOptions: [
      {
        title: "Monthly",
        value: "month",
      },
      {
        title: "Weekly",
        value: "week",
      },
      {
        title: "Daily",
        value: "day",
      },
    ],
  };

  componentDidMount() {
    this.calendarInst = this.ref.current.getInstance();
    // this.setState({ view: this.props.view });
  }

  onAfterRenderSchedule = (res) => {
    console.log("Schedule Info : ", res.schedule);
  };

  onBeforeDeleteSchedule = (res) => {
    console.log("Schedule Info : ", res.schedule);

    const { id, calendarId } = res.schedule;

    this.calendarInst.deleteSchedule(id, calendarId);
  };

  onChangeSelect = (ev) => {
    this.setState({ view: ev.target.value });

    this.setRenderRangeText();
  };

  onClickDayname = (res) => {
    // view : week, day
    console.log(res.date);
  };

  onChange = (e) => {
    this.setState({
      selectedView: e.target.value,
    });
  };

  onClickSchedule = (res) => {
    console.log("MouseEvent : ", res.event);
    console.log("Calendar Info : ", res.calendar);
    console.log("Schedule Info : ", res.schedule);
  };

  onClickTimezonesCollapseBtn = (timezonesCollapsed) => {
    // view : week, day
    console.log("Is Collapsed Timezone? ", timezonesCollapsed);

    const theme = {};
    if (timezonesCollapsed) {
      theme["week.daygridLeft.width"] = "200px";
      theme["week.timegridLeft.width"] = "200px";
    } else {
      theme["week.daygridLeft.width"] = "100px";
      theme["week.timegridLeft.width"] = "100px";
    }

    this.calendarInst.setTheme(theme);
  };

  setRenderRangeText = () => {
    const view = this.calendarInst.getViewName();
    const calDate = this.calendarInst.getDate();
    const rangeStart = this.calendarInst.getDateRangeStart();
    const rangeEnd = this.calendarInst.getDateRangeEnd();
    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText = "";
    let endMonth, endDate, start, end;

    switch (view) {
      case "month":
        dateRangeText = `${year}-${month}`;
        break;
      case "week":
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        endMonth = rangeEnd.getMonth() + 1;
        endDate = rangeEnd.getDate();

        start = `${year}-${month < 10 ? "0" : ""}${month}-${
          date < 10 ? "0" : ""
        }${date}`;
        end = `${year}-${endMonth < 10 ? "0" : ""}${endMonth}-${
          endDate < 10 ? "0" : ""
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      default:
        dateRangeText = `${year}-${month}-${date}`;
    }

    this.setState({ dateRange: dateRangeText });
  };

  onBeforeUpdateSchedule = (event) => {
    const { schedule } = event;
    const { changes } = event;

    this.calendarInst.updateSchedule(schedule.id, schedule.calendarId, changes);
  };

  onBeforeCreateSchedule = (scheduleData) => {
    const { calendar } = scheduleData;
    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      // 颜色此处还需要调整
      // raw: {
      //   class: scheduleData.raw["class"],
      // },
      // bgColor: scheduleData["bgColor"],
      state: scheduleData.state,
    };

    if (calendar) {
      schedule.calendarId = calendar.id;
      schedule.color = calendar.color;
      schedule.bgColor = calendar.bgColor;
      schedule.borderColor = calendar.borderColor;
    }

    this.calendarInst.createSchedules([schedule]);
  };

  render() {
    const { selectedView } = this.state;
    // const selectedView = view || this.props.view;

    return (
      <div>
        <h1>🍞📅 日历</h1>
        <Radio.Group
          options={options}
          onChange={this.onChange}
          value={selectedView}
          optionType="button"
        />
        <Calendar
          calendars={[
            {
              id: "0",
              name: "个人计划",
              bgColor: "#9e5fff",
              borderColor: "#9e5fff",
            },
            {
              id: "1",
              name: "公司计划",
              bgColor: "#00a9ff",
              borderColor: "#00a9ff",
            },
            {
              id: "2",
              name: "个人任务",
              bgColor: "red",
              borderColor: "red",
            },
          ]}
          schedules={[
            {
              id: "1",
              calendarId: "0",
              title: "TOAST UI Calendar Study",
              category: "time",
              dueDateClass: "",
              start: today.toISOString(),
              end: getDate("hours", today, 3, "+").toISOString(),
            },
            {
              id: "2",
              calendarId: "0",
              title: "Practice",
              category: "task",
              dueDateClass: "",
              start: getDate("date", today, 1, "+").toISOString(),
              end: getDate("date", today, 1, "+").toISOString(),
              isReadOnly: true,
            },
            {
              id: "12",
              calendarId: "0",
              title: "Practice",
              category: "task",
              dueDateClass: "",
              start: getDate("date", today, 1, "+").toISOString(),
              end: getDate("date", today, 1, "+").toISOString(),
              isReadOnly: true,
            },
            {
              id: "22",
              calendarId: "0",
              title: "Practice",
              category: "task",
              dueDateClass: "",
              start: getDate("date", today, 1, "+").toISOString(),
              end: getDate("date", today, 1, "+").toISOString(),
              isReadOnly: true,
            },
            {
              id: "3",
              calendarId: "0",
              title: "FE Workshop",
              category: "allday",
              dueDateClass: "",
              start: getDate("date", today, 2, "-").toISOString(),
              end: getDate("date", today, 1, "-").toISOString(),
              isReadOnly: true,
            },
            {
              id: "4",
              calendarId: "0",
              title: "Report",
              category: "time",
              dueDateClass: "",
              start: today.toISOString(),
              end: getDate("hours", today, 1, "+").toISOString(),
            },
          ]}
          timezones={[
            {
              timezoneOffset: 540,
              displayLabel: "GMT+09:00",
              tooltip: "Seoul",
            },
            {
              timezoneOffset: -420,
              displayLabel: "GMT-08:00",
              tooltip: "Los Angeles",
            },
          ]}
          week={{
            showTimezoneCollapseButton: true,
            timezonesCollapsed: false,
          }}
          height="900px"
          defaultView="month"
          disableDblClick
          usageStatistics={false}
          isReadOnly={false}
          month={{
            startDayOfWeek: 0,
          }}
          scheduleView
          taskView
          template={{
            milestone(schedule) {
              return `<span style="color:#fff;background-color: ${schedule.bgColor};">${schedule.title}</span>`;
            },
            milestoneTitle() {
              return "Milestone";
            },
            allday(schedule) {
              return `${schedule.title}<i class="fa fa-refresh"></i>`;
            },
            alldayTitle() {
              return "All Day";
            },
          }}
          theme={myTheme}
          useDetailPopup
          useCreationPopup
          view={selectedView}
          ref={this.ref}
          onAfterRenderSchedule={this.onAfterRenderSchedule}
          onBeforeDeleteSchedule={this.onBeforeDeleteSchedule}
          onClickDayname={this.onClickDayname}
          onClickSchedule={this.onClickSchedule}
          onClickTimezonesCollapseBtn={this.onClickTimezonesCollapseBtn}
          onBeforeUpdateSchedule={this.onBeforeUpdateSchedule}
          onBeforeCreateSchedule={this.onBeforeCreateSchedule}
        />
      </div>
    );
  }
}

export default MyCalendar;
