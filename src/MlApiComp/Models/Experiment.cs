using System;

namespace MlApiComp.Models
{
    public class Experiment
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime EventDate { get; set; }

        public string ExecutorName { get; set; }

        public decimal Cost { get; set; }
    }
}
