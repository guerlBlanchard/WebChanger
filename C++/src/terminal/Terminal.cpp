#include "Terminal.hpp"

Terminal::Terminal()
{
    commands["help"] = 1;
}

Terminal::~Terminal()
{
}

int Terminal::RunCommand(std::string cmd) {
    switch(commands[cmd]) {
        case 1: 
            std::cout << "help me" << std::endl;
            break;
        default: 
            std::cout << "this command is unknown" << std::endl;
            break;
    }
}

int Terminal::Run() {
    std::string input;  

    while (1) {
        std::cout << "> ";
        std::getline(std::cin, input);
        RunCommand(input);
    }
}