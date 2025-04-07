"use client";

import { getYear, range } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const SelectDate = ({
  onChange,
}: {
  onChange: (date: Date | null) => void;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const years = range(1990, getYear(new Date()));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      selected={startDate}
      form="external-form"
      onChange={(date) => {
        onChange(date);
      }}
    />
  );
};

export default SelectDate;
