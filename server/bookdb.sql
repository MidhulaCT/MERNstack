-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2025 at 08:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `uname` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `role` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `uname`, `password`, `role`) VALUES
(1, 'midhula', 'midhu', '5508d1ba6142ed91fffa950f996e067930dcdf3e', 'user'),
(2, 'Meenu', 'meenu', '5ca09d0aef312d885cc8015188c986664a3c8f66', 'user'),
(3, 'Roy', 'Roy', '96b2c2b5b05b495aa7257e56dfd3b23124b5df88', 'user'),
(4, 'Abi', 'abi', 'eacb31c62498c255331db08f23783731db8ce66b', 'user'),
(5, 'ghgfj', 'hjhj', 'b69d01f6989199efc0572fac0b97954500b09408', 'user'),
(6, 'Romeo and Juliet', 'Roy', '5ca09d0aef312d885cc8015188c986664a3c8f66', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `mybooks`
--

CREATE TABLE `mybooks` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `auther` varchar(250) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mybooks`
--

INSERT INTO `mybooks` (`id`, `name`, `auther`, `price`, `description`) VALUES
(1, 'Pathummayude aadu', 'Basheer', 500, 'kerala story'),
(2, 'kayar', 'thakazhi', 400, 'malayalam'),
(3, 'Davinci code', 'Dan Brown', 800, 'malayam translation'),
(4, 'Agnichirakukal ML', 'APJ Abdhul Kalam', 650, 'Biography ML'),
(6, 'Romeo and Juliet', 'Shakespere', 850, 'English play'),
(7, 'aaaaa', 'bbbbb', 230, 'ccccc');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `gender` varchar(200) NOT NULL,
  `address` varchar(250) NOT NULL,
  `phone` bigint(10) DEFAULT NULL,
  `role` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `gender`, `address`, `phone`, `role`) VALUES
(1, 'midhula', 'Female', 'Kalady', 984712776, 'user'),
(2, 'Meenu', 'Female', 'Kochi', 9847102776, 'user'),
(3, 'Roy', 'Male', 'Meloor', 9847102730, 'user'),
(4, 'Abi', 'Male', 'Thrissur', 9847102732, 'user'),
(5, 'ghgfj', 'Male', 'hgkhjk', 9847102774, 'user'),
(6, 'Romeo and Juliet', 'Male', 'Kochi', 9847102776, 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mybooks`
--
ALTER TABLE `mybooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mybooks`
--
ALTER TABLE `mybooks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
