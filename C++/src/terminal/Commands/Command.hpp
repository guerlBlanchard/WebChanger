#ifndef COMMANDS_HPP_
#define COMMANDS_HPP_

#include <string>
#include <iostream>

struct command_info {
    int Id;
    std::string name;
};

class Command {
    public:
        Command(int id, std::string name);
        ~Command();
        virtual int Run() const;
        command_info get_info();
    private:
    protected:
        command_info info;
};

#endif /* !COMMANDS_HPP_ */
