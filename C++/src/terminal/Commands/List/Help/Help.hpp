#ifndef HELP_HPP_
#define HELP_HPP_

#include "../../Command.hpp"

class Help : public Command {
    public:
        Help();
        ~Help();
        int Run() const override;
    protected:
    private:
};

#endif /* !HELP_HPP_ */
