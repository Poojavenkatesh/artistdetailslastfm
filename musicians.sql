-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2017 at 03:25 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicians`
--
CREATE DATABASE IF NOT EXISTS `musicians` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `musicians`;

-- --------------------------------------------------------

--
-- Table structure for table `musician`
--

DROP TABLE IF EXISTS `musician`;
CREATE TABLE `musician` (
  `musicianid` varchar(10) NOT NULL,
  `name` varchar(32) NOT NULL,
  `genre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `musician`
--

INSERT INTO `musician` (`musicianid`, `name`, `genre`) VALUES
('1a', 'Elvis Presley', 'Rock'),
('2a', 'John Lennon', 'Rock'),
('3a', 'Young Thug', 'Pop'),
('4a', 'Gwen Stefani', 'Pop'),
('5a', 'Adam Levine', 'Rock'),
('6a', 'Paul McCartney', 'Blues'),
('7a', 'Marvin Gaye', 'R&B'),
('8a', 'Elton John', 'Techno');

-- --------------------------------------------------------

--
-- Table structure for table `performance`
--

DROP TABLE IF EXISTS `performance`;
CREATE TABLE `performance` (
  `performanceid` varchar(13) NOT NULL,
  `monthyear` date NOT NULL,
  `musicianid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `performance`
--

INSERT INTO `performance` (`performanceid`, `monthyear`, `musicianid`) VALUES
('1', '2017-01-05', '1a'),
('2', '2017-01-10', '2a'),
('3', '2017-02-11', '3a'),
('4', '2017-02-14', '4a'),
('5', '2017-04-20', '5a'),
('6', '2017-04-25', '6a'),
('7', '2017-08-10', '7a'),
('8', '2017-08-15', '8a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `musician`
--
ALTER TABLE `musician`
  ADD PRIMARY KEY (`musicianid`);

--
-- Indexes for table `performance`
--
ALTER TABLE `performance`
  ADD PRIMARY KEY (`performanceid`),
  ADD KEY `musicianid` (`musicianid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `performance`
--
ALTER TABLE `performance`
  ADD CONSTRAINT `performance_ibfk_1` FOREIGN KEY (`musicianid`) REFERENCES `musician` (`musicianid`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
