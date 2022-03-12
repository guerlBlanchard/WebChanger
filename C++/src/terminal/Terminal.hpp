#ifndef TERMINAL_HPP_
#define TERMINAL_HPP_

#include <iostream>
#include <string>
#include <map>

class Terminal {
    public:
        Terminal();
        ~Terminal();
        int Run();
    protected:
    private:
        std::map<std::string, int> commands;
        int RunCommand(std::string cmd);
};

#endif