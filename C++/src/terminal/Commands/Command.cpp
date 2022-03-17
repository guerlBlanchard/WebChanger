/*
** EPITECH PROJECT, 2022
** Untitled (Workspace)
** File description:
** Command
*/

#include "Command.hpp"

Command::Command(int id, std::string name)
{
    this->info.Id = id;
    this->info.name = name;
}

Command::~Command()
{
}

command_info Command::get_info()
{
    return (this->info);
}